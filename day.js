
exports.day=()=>{const today = new Date();
    
    const options={
         weekday:"short",
         day:"numeric",
         month:"short",
         year:"numeric"
    }

    return today.toLocaleDateString("en-IN",options)
}

exports.date=()=>{
    const today = new Date();
    const options={
        day:"numeric",
        month:"numeric",
        year:"numeric"
   }

   return today.toLocaleDateString("en-IN",options)
}
