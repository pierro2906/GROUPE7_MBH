import 'dart:convert';
import 'package:http/http.dart' as http;

class OTPService {
  final String baseUrl = 'j312d8gh-3344.euw.devtunnels.ms';

  Future<String> sendOTP(String phoneNumber) async {
    print(phoneNumber);
    Map<String, String> headers = {'Content-type': 'application/json'};
    const uri = 'api/v1/auth/citizen/login';
    var url = Uri.http(baseUrl, uri);
    final response =
        await http.post(url, body: {'contact': "22879439850"});
    if (response.statusCode == 200) {
      final jsonResponse = json.decode(response.body);
      final hashCode = jsonResponse['data'];
      return hashCode;
    } else {
      throw Exception(response.statusCode);
    }
  }

  Future<bool> verifyOTP(
      String phoneNumber, String otpCode, String hashCode) async {
    final url = '${baseUrl}verify-otp';
    final response = await http.post(Uri.parse(url), body: {
      'phone': phoneNumber,
      'otp': otpCode,
      'hash': hashCode,
    });
    if (response.statusCode == 200) {
      // final jsonResponse = json.decode(response.body);
      // final success = jsonResponse['message'];
      return true;
    } else {
      return false;
    }
  }
}