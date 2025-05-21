/* try {
    //Code that may thrown an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that always runs (cleanup actions)
}

 */


function processInformation(information){
    try {
        console.log("Processing information...");
        if(!information) throw new Error("No information available to process");
        console.log("Information processed");
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Cleanup: Closing database connection");
    }
}

processInformation("Suez is learning JS");
processInformation();

