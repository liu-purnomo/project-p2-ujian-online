const { comparePassword, encrypt, usernameGenerator, tokenKey, hashPassword } = require('../helpers')
const { Op } = require("sequelize");
const { User } = require('../models');
const sendEmailConfirmation = require('../helpers/sendEmailConfirmation');
const cloudinary = require('../helpers/cloudinary');
const midtransClient = require('midtrans-client');
const { OAuth2Client } = require("google-auth-library");
const generator = require('generate-password');


class userController {
    //get all user data
    static async index(req, res, next) {
        try {
            const { search } = req.query


            let whereCondition = {}
            if (search) {
                whereCondition = {
                    name: {
                        [Op.iLike]: `%${search}%`
                    }
                }
            }

            const { count, rows } = await User.findAndCountAll({
                where: whereCondition,
                attributes: {
                    exclude: ['password']
                }
            })
            if (search && count <= 0) throw { name: 'NotFound' }
            res.status(200).json({
                count,
                users: rows
            })
        } catch (err) {
            next(err)
        }
    }
    //static for register
    static async register(req, res, next) {
        try {
            const { email, password, name, } = req.body

            const createdUser = await User.create({
                email,
                password,
                name,
                username: usernameGenerator(email),
                role: 'guest',
                isPremium: false,
                tokenKey: tokenKey(),
                avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
            })

            sendEmailConfirmation(createdUser.email, createdUser.tokenKey)

            res.status(201).json({
                message: 'User was registered successfully! Please check your email'
            })
        } catch (err) {
            next(err)
        }
    }


    static async confirmation(req, res, next) {
        try {
            let tokenKey
            let email
            if (req.body.token) {
                tokenKey = req.body.token
                email = req.body.email
            } else if (req.query.token) {
                tokenKey = req.query.token
                email = req.query.email
            } else {
                throw { name: 'TokenRequired' }
            }

            const isValidToken = await User.update(
                {
                    role: 'user',
                    tokenKey: null
                },
                {
                    where: {
                        tokenKey,
                        email
                    }
                }
            )


            if (isValidToken <= 0) throw { name: 'InvalidVerificationInfo' }

            res.status(200).json({
                message: 'Your account has been activated'
            })
        } catch (err) {
            next(err)
        }
    }

    //statuc for login normal
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) throw { name: 'EmailRequired' }
            if (!password) throw { name: 'PasswordRequired' }
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user) throw { name: 'Unauthorized' }
            const isValidPassword = comparePassword(password, user.password)
            if (!isValidPassword) throw { name: 'Unauthorized' }
            if (user.role === 'guest') throw { name: 'isNotComfirm' }
            const access_token = encrypt({
                id: user.id,
                username: user.username,
                role: user.role,
                isPremium: user.isPremium
            })
            res.status(200).json({
                access_token
            })
        } catch (err) {
            next(err)
        }
    }

    //method to get detail user
    static async detail(req, res, next) {
        try {
            const { id } = req.params
            const user = await User.findOne({
                where: {
                    id
                },
                attributes: {
                    exclude: ['password']
                }
            })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }

    //method to get detail user
    static async userDetail(req, res, next) {
        try {
            const { id } = req.user
            const user = await User.findOne({
                where: {
                    id
                },
                attributes: {
                    exclude: ['tokenKey', 'password']
                }
            })
            res.status(200).json(user)
        } catch (err) {
            next(err)
        }
    }

    static async generateMitransToken(req, res, next) {
        try {
            const { id } = req.user

            const user = await User.findByPk(id)

            if (user.isPremium) throw { name: 'AlreadySubscribe' }

            const order_id = 'TRANS_' + id + tokenKey() + (Math.floor(Math.random() * 90000) + 10000);

            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction: false,
                serverKey: process.env.MIDTRANS_KEY
            });

            let parameter = {
                "transaction_details": {
                    "order_id": order_id,
                    "gross_amount": 50000
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "name": user.name,
                    "email": user.email,
                    "phone": user.phone
                }
            };

            const mitrans_token = await snap.createTransaction(parameter)

            res.status(200).json({
                token: mitrans_token.token
            }
            )
        } catch (err) {
            next(err)
        }
    }

    static async subscription(req, res, next) {
        try {
            const { id } = req.user
            const user = await User.update({
                isPremium: true
            }, {
                where: {
                    id
                },
            })
            res.status(200).json({
                message: 'You are premium now'
            })
        } catch (err) {
            next(err)
        }
    }

    //method for edit data user
    static async edit(req, res, next) {
        try {
            const { id } = req.params
            const { username, email, password, oldPassword, phone, name, gender, avatar } = req.body

            if ((!username) && (!email) && (!password) && (!oldPassword) && (!phone) && (!name) && (!gender)) throw { name: 'NothingUpdate' }
            if (password) {
                if (!oldPassword) throw { name: 'OldPasswordRequired' }
                const cekPassword = await User.findByPk(id)
                const isMatchPassword = comparePassword(oldPassword, cekPassword.password)
                if (!isMatchPassword) throw { name: 'InvalidOldPassword' }
            }

            const user = await User.update({
                username,
                email,
                password,
                phone,
                name,
                gender,
                avatar

            }, {
                where: {
                    id
                },
                individualHooks: true,
            })

            res.status(200).json({
                message: 'User data has been updated'
            })

        } catch (err) {
            next(err)
        }
    }

    static async userEdit(req, res, next) {
        try {
            const { id } = req.user
            let { username, email, password, oldPassword, phone, name, gender, avatar } = req.body

            if ((!username) && (!email) && (!password) && (!oldPassword) && (!phone) && (!name) && (!gender)) throw { name: 'NothingUpdate' }

            if (password) {
                if (!oldPassword) throw { name: 'OldPasswordRequired' }
                const cekPassword = await User.findByPk(id)
                const isMatchPassword = comparePassword(oldPassword, cekPassword.password)
                if (!isMatchPassword) throw { name: 'InvalidOldPassword' }
                password = hashPassword(password)
            }

            const user = await User.update({
                username,
                email,
                password,
                phone,
                name,
                gender,
                avatar

            }, {
                where: {
                    id
                },
                individualHooks: true,
            })

            res.status(200).json({
                message: 'User data has been updated'
            })

        } catch (err) {
            next(err)
        }
    }

    static async uploadFile(req, res, next) {
        try {
            const { id } = req.user
            if (!req.file) throw { name: 'FileRequired' }
            const { path } = req.file

            const upload = await cloudinary.uploader.upload(path, {
                folder: 'user-avatar',
                width: 200,
                height: 200,
                Crop: 'fill'
            })

            console.log(upload)

            const user = await User.update(
                // { avatar: upload },
                { where: { id } }
            )
            if (user <= 0) throw { name: 'UploadFailed' }

            return res.status(201).json({
                message: 'Avatar has been updated'
            });
        } catch (err) {
            next(err)
        }
    }

    static async delete(req, res, next) {
        try {
            const id = +req.params.id
            const user = await User.destroy({
                where: {
                    id
                }
            })

            if (user <= 0) throw { name: 'NotFound' }

            res.status(200).json({
                message: `User with id ${id} has been deleted`
            })
        } catch (err) {
            next(err)
        }
    }

    //loginm using google account
    static async loginGoogle(req, res, next) {
        try {
            const { token_google } = req.body;
            const googleClientId = process.env.GOOGLE_CLIENT_ID;
            const client = new OAuth2Client(googleClientId);

            const ticket = await client.verifyIdToken({
                idToken: token_google,
                audience: googleClientId,
            });

            const payload = ticket.getPayload();

            const password = generator.generate({
                length: 10,
                numbers: true
            });

            const [user, created] = await User.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    email: payload.email,
                    password,
                    name: payload.name,
                    username: usernameGenerator(payload.email),
                    role: 'user',
                    isPremium: false,
                    tokenKey: null,
                    avatar: payload.picture,
                },
                hooks: false,
            });

            const access_token = encrypt({
                id: user.id,
                username: user.username,
                role: user.role,
                isPremium: user.isPremium
            });

            res.status(200).json({
                access_token
            });
        } catch (err) {
            next(err);
        }
    }


    static async loginFirebase(req, res, next) {
        try {
            const { response } = req.body;
            const password = generator.generate({
                length: 10,
                numbers: true
            });

            const [user, created] = await User.findOrCreate({
                where: { email: response.user.email },
                defaults: {
                    email: response.user.email,
                    password,
                    name: response.user.displayName,
                    username: usernameGenerator(response.user.displayName),
                    role: 'user',
                    isPremium: false,
                    tokenKey: null,
                    avatar: response.user.photoURL,
                },
                hooks: false,
            });

            const access_token = encrypt({
                id: user.id,
                username: user.username,
                role: user.role,
                isPremium: user.isPremium
            });

            res.status(200).json({
                access_token
            });
        } catch (err) {
            next(err);
        }
    }


}

module.exports = userController