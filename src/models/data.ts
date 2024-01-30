class Data{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;

    constructor(
        _firstName: string,
        _lastName: string,
        _email: string,
        _country: string,
        _address: string,
        _city: string,
        _state: string,
        _pinCode: string,
    ){
        this.id=(Math.floor(Math.random() * 100)).toString();
        this.firstName=_firstName;
        this.lastName=_lastName;
        this.email=_email;
        this.country=_country;
        this.address=_address;
        this.city=_city;
        this.state=_state;
        this.pinCode=_pinCode
    }
}
export default Data;