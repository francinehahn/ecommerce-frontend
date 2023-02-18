export const validateName = name => /(?=^.{2,60}$)^[A-Z][a-z]+(?:[ ](?:das?|dos?|de|e|[A-Z][a-z]+))*$/.test(name)
export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)
export const validatePassword = password => /.{6,}/.test(password)
export const validateProductName = name => /.{10,255}/.test(name)
export const validateImageUrl = url => url.length > 40