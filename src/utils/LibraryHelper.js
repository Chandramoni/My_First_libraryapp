export const debounce = (func, wait) => {  
    let debounceTimer  
    return function() {  
        const context = this  
        const args = arguments  
            clearTimeout(debounceTimer)  
                debounceTimer  
            = setTimeout(() => func.apply(context, args), wait)  
    }  
} 