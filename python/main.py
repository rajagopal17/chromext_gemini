from scraper import scrape_website

if __name__ == "__main__":
    url = input("Enter the URL to scrape: ")
    output_path = input("Enter the path to save the scraped data: ")
    scrape_website(url, output_path)
