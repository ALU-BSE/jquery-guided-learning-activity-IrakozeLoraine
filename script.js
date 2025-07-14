$(document).ready(function() {
    // Search on button click
    $('#searchBtn').click(function() {
        performSearch();
    });

    // Search on Enter key press
    $('#searchInput').keypress(function(e) {
        if (e.which === 13) {
            performSearch();
        }
    });

    function performSearch() {
        
        const searchTerm = $('#searchInput').val().toLowerCase().trim();
    
        // Validate search term
        if (searchTerm === '') {
            $('#results').html('<p>Please enter a search term</p>');
            return;
        }

        $.ajax({
          url: 'https://openlibrary.org/search.json',
          dataType: 'json',
          data: {
            q: searchTerm,
          },
          beforeSend: function() {
            // show loading spinner
            $('#loadingSpinner').show();
            $('#results').empty();
          },
          complete: function() {
            // hide loading spinner
            $('#loadingSpinner').hide();
            // Fade out input to indicate search is complete
            $('#searchInput').fadeOut(100).fadeIn(100);
          },
          success: function(data) {
            if (data.docs && data.docs.length > 0) {
                displayBooks(data.docs);
            } else {
                $('#results').html('<p>No books found matching your search.</p>');
            }
          },
          error: function(error) {
            $('#results').html(`<p>Failed to search for books: ${error}<br/> Please try again later.</p>`);
          }
        });
    }

    function displayBooks(books) {
        $('#results').empty();
        
        books.forEach(book => {
            // Get cover image url if available
            const coverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null;
            // Get author names if available
            const authors = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
            const bookElement = $(`
            <div class="book-item">
                ${coverUrl ? `<img src="${coverUrl}" alt="${book.title} cover" class="book-cover">` : ''}
                <div class="book-title">${book.title}</div>
                <div class="book-author">by ${authors}</div>
                <div class="book-description">
                ${book.first_publish_year ? `<strong>First Publish Year:</strong> ${book.first_publish_year}` : ''}
                ${book.ebook_access ? `<strong>Ebook Access:</strong> ${book.ebook_access}` : ''}
                </div>
              </div>
            </div>
            `);
            
            // Add hover effect
            bookElement.hover(
                function() {
                    $(this).css('background-color', '#e9e9e9');
                },
                function() {
                    $(this).css('background-color', '');
                }
            );
            
            // Click handler to show description with chained effects
            bookElement.click(function() {
            const description = $(this).find('.book-description');
            
            if (description.is(':visible')) {
                description.slideUp(300);
            } else {
                // Chain multiple effects
                description
                .slideDown(300)
                .delay(200)
                .css('color', '#333');
            }
            });
            
            // Add book to results with fade-in effect
            bookElement.hide().appendTo('#results').fadeIn(500);
        });
    }
});
