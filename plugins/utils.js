export default {
  methods: {
    invalidEmails (emails) {
      if (!emails) {
        return true
      }
      // eslint-disable-next-line
      const reValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => !reValidEmail.test(email))
      if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`
      }
      return true
    }
  }
}
