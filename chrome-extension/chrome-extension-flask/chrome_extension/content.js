const scrapeAndSendToLLM = async () => {
    // Scrape all text data from the active webpage
    const bodyText = document.body.innerText;

    // Send the scraped text data to the Flask backend for summarization
    try {
        const response = await fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: bodyText }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Summarized Data:', result.summary);
    } catch (error) {
        console.error('Error:', error);
    }
};

// Run the function to scrape and send data
scrapeAndSendToLLM();