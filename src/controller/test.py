import PyPDF2

def find_replace_save_pdf(input_file, output_file, find_str, replace_str):
    try:
        # Open the input PDF file for reading
        with open(input_file, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            writer = PyPDF2.PdfWriter()

            # Iterate through each page of the PDF
            for page in reader.pages:
                # Extract text from the page
                text = page.extract_text()

                # Perform the find and replace operation
                modified_text = text.replace(find_str, replace_str)

                # Create a new text object with the modified text
                new_text_object = PyPDF2.generic.TextStringObject(modified_text)
                new_text_object.type = PyPDF2.generic.TextStringObject.TYPE

                # Create a new page with the modified text object
                new_page = page.__class__(new_text_object)

                # Add the new page to the PDF writer
                writer.add_page(new_page)

            # Write the modified content to the output PDF file
            with open(output_file, 'wb') as output_pdf:
                writer.write(output_pdf)

        print("Find and replace operation completed successfully.")

    except FileNotFoundError:
        print("Input file not found.")
    except Exception as e:
        print("An error occurred:", str(e))


# Example usage:
if __name__ == "__main__":
    input_pdf = r"C:\Users\hp\Downloads\Telegram Desktop\GP_Sem5_TimeManagement and WaysOfThinking - Rishi Matura.pdf"  # Path to the input PDF file
    output_pdf = "output.pdf"  # Path to the output PDF file
    find_str = "old_text"  # Text to find
    replace_str = "new_text"  # Text to replace with

    find_replace_save_pdf(input_pdf, output_pdf, find_str, replace_str)
