const User = require('../model/user');
const sendEmail = require('../utils/sendEmail');
const Email = require('../utils/email');
const checkBankDetails = require('../utils/customerValidation');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.register = catchAsync(async (req, res, next) => {
  
  /* To validate user
  const validateUser = await checkBankDetails(req.body.accountNumber, req.body.bankCode);
  if (!validateUser) {
    return res.status(400).json({
      status: 'failed',
      msg: 'Invalid account number'
    })
  }
  */

  //check if user already exist
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
    return next(
      new AppError('Email already linked to existing registration', 400)
    );
  }

  // if new user, create user
  const user = await User.create(req.body);

  // sending email
  const { firstName, lastName } = user;
  const mailingmessage = Email(firstName, lastName);

  await sendEmail({
    email: user.email,
    subject: 'Registration Successful!!!',
    html: mailingmessage,
  });

  return res.status(200).json({
    status: 'success',
    msg: 'Registration successful...',
    data: user,
  });
});
