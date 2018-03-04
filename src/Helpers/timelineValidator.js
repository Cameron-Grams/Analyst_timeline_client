const timelineValidator = values => {

    const errors = {}
    
    if ( !values.timelineTitle ){
        errors.timelineTitle = "Timeline Title Required"
    }    
    return errors
  }

module.exports = { timelineValidator };