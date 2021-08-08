export default function validateForm(values) {
    let errors = {}

    //  Validate username
    if (!values.username.trim()) {
        errors.username = 'Username is required'
    }

    //  Validate email
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid'
    }

    //  Validate password
    if (!values.password) {
        errors.password = 'Password is required'
    } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password)) {
        errors.password = 'Password needs to have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
    }

    //  Validate repeated password
    if (!values.passwordRepeated) {
        errors.passwordRepeated = 'Password is required'
    } else if (values.passwordRepeated !== values.password) {
        errors.passwordRepeated = 'Password do not match'
    }

    return errors
}