import 'package:flutter/material.dart';
import 'package:isignal/services/OTPService.dart';


class OTPProvider with ChangeNotifier {
  final OTPService _otpService = OTPService();
  String _phoneNumber = '';
  String _otpCode = '';
  String _dialCode = '';
  // ignore: non_constant_identifier_names
  String _hash_Code = '';
  bool _isVerified = false;

  String get phoneNumber => _phoneNumber;
  String get otpCode => _otpCode;
  String get dialCode => _dialCode;
  // ignore: non_constant_identifier_names
  String get hash_Code => _hash_Code;
  bool get isVerified => _isVerified;

  void setPhoneNumber(String value) {
    _phoneNumber = value;
    notifyListeners();
  }

  void setOTPCode(String value) {
    _otpCode = value;
    notifyListeners();
  }

  void setDialCode(String value) {
    _dialCode = value;
    notifyListeners();
  }

  Future<void> sendOTP() async {
    try {
      _hash_Code = await _otpService.sendOTP(_dialCode + _phoneNumber);
      notifyListeners();
    } catch (error) {
      print(error.toString());
    }
  }

  Future<void> verifyOTP() async {
    try {
      _isVerified = await _otpService.verifyOTP(
          _dialCode + _phoneNumber, _otpCode, _hash_Code);
      notifyListeners();
    } catch (error) {
      print(error.toString());
    }
  }
}
