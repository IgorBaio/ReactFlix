import React from 'react';

function FormField({label, value,inputType,type,name ,onChange}){
   return (
      <div>
         <label>
               {label+' '}
               <input type={type}
               value={value}
               name={name}
                     onChange={onChange}
                  />
         </label>
      </div>
   )
}
      

export default FormField;