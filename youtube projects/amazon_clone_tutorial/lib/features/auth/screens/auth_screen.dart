import 'package:amazon_clone_tutorial/constants/global_variables.dart';
import 'package:flutter/material.dart';

enum Auth{
  signin,
  signup,
}

class AuthScreen extends StatefulWidget {
  static const String routeName='/auth-screen';
  const AuthScreen({super.key});
  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  Auth _auth=Auth.signup;
  final _signUpFormKey=GlobalKey<FormState>();
  final _signInFormKey=GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: GlobalVariables.greyBackgroundCOlor,
      body:SafeArea(
        child:Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
              children:[
              const Text(
                  "Welcome",
                  style: TextStyle(
                    fontSize:22,
                    fontWeight: FontWeight.w500,
                  ),  
                ),             
                ListTile(
                  title:const Text(
                    'Create Account',
                     style: TextStyle(
                      fontWeight: FontWeight.bold
                    ),
                  ),
                  leading:Radio(
                    activeColor: GlobalVariables.secondaryColor,
                    value:Auth.signup,
                    groupValue: _auth,
                    onChanged:(Auth? val){
                      setState((){
                        _auth=val!;
                      });
                    },

                  ),
                ),
                if(_auth==Auth.signup)
                     Form(
                       key:_signUpFormKey,
                       child:Column(
                        
                       ),
                     ),
                ListTile(
                  title:const Text(
                    'Sign In',
                     style: TextStyle(
                      fontWeight: FontWeight.bold
                    ),
                  ),
                  leading:Radio(
                    activeColor: GlobalVariables.secondaryColor,
                    value:Auth.signin,
                    groupValue: _auth,
                    onChanged:(Auth? val){
                      setState((){
                        _auth=val!;
                      });
                    },

                  ),
                ),
              ],
          ),
        )
      ),
    );
  }
}