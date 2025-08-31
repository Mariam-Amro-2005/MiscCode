function unreliableFunction() {
    if (Math.random() < 0.5) {
    throw new Error('Failed!');
    }
    return 'Success!';
}

function retry(fn, tries){
    for (let i = 0; i < tries; i++){
        try{
            return fn();
        }catch (error){
            console.log(`Error in try ${i + 1}, error: ${error.message}`);
        }
    }
    throw new Error(`All ${tries} tries failed.`);
}

document.addEventListener("DOMContentLoaded", () =>{
    try {
        console.log(retry(unreliableFunction, 3));
    } catch (e) {
        console.error("Error:", e.message);
    }

})