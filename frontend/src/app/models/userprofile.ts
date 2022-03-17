
// -- Pascal -- //
export class Userprofile{
  token: string | null;
  user_id: number;
  user_name: string;
  user_email: string;
  user_address: string;
  user_phone_number: string;
  user_bank_info: string;

  constructor(user_id: number, user_name: string, user_email: string, user_address: string, user_phone_number: string, user_bank_info: string){
    this.user_id = user_id;
    this.user_name = user_name;
    this.user_email = user_email;
    this.user_address = user_address;
    this.user_phone_number = user_phone_number;
    this.user_bank_info = user_bank_info;
  }
}
