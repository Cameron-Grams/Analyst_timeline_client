const entryValidator = values => {

    const errors = {}
    if ( !values.title ) {
        errors.title = 'Title for Entry is Required'
    }
    if ( !values.what ){
        errors.what = "Entry Details are Required"
    }    
    if ( !values.who ){
        errors.who = "Who conducted the action is Required"
    }
    if ( !values.where ){
        errors.where = "Entry Location is Required"
    }
    if ( !values.source ){
        errors.source = "Entry source reference is Required"
    }
    if ( !values.content ){
        errors.content = "Statement of Entry significance is Required"
    }
    if ( !values.date ){
        errors.date = "An Entry Date is Required"
    }
    return errors
}

module.exports = { entryValidator };

