for (var i = 1; i <= 100; i++) {
    // Check for multiples of both 3 and 5 (i.e., multiples of 15)
    if (i % 15 === 0) {
        window.document.write("Marco! Polo!\n");
    }
    // Check for multiples of 3
    else if (i % 3 === 0) {
        window.document.write("Marco!\n");
    }
    // Check for multiples of 5
    else if (i % 5 === 0) {
        window.document.write("Polo!\n");
    }
    // Print the number if it's not a multiple of 3 or 5
    else {
        window.document.write(i + "\n");
    }
}