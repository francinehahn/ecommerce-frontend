export const validateName = name => /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/.test(name)
export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)
export const validatePassword = password => /.{6,}/.test(password)

export const validateProductName = name => /.{10,255}/.test(name)
export const validateProductPrice = price => /^\d+(,\d{1,2})?$/.test(price)
export const validateImageUrl = url => /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/.test(url)