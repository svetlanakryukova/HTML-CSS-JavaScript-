Final Project
Web Client Development
420-DW2-AS
Presented by: Kryukova Svetlana
================================================================================================================

The project consists in designing and developing a website.
My website "NATALY FASHION STUDIO" consist of many pages. 


***************************************************************************************************
** !!!! aplication has been tested and ready to work in Chrome browser or Firefox browser. !!!!! **
***************************************************************************************************




****         The aplication start whith 	index.html

1. HOME page (index.html) - in the Home page you have access just in two page, Home and Login.
2. LOGIN page (login.html) - by clicking in login, the Login page will be displayed and you need to enter pass and username in order to access to other pages.
3. WELCOME page (welcome.html) - with greeting message will be shown and you will see other page links
4. SKETCHS page (sketch_gallery.html) - on this page is presented SKETCHS GALLERY from our disigners. 
5. ITEMS page (finished_items.html) -  on this page is presented FINISHED ITEMS from our disigners
6. SHOPPING page (shopping.html) - on this page you can purchase a coupon for sewing clothes according to your individual sizes and requirements.
7. INVOICE page (invoice.html) - on this page you can you can place and pay your order.
8. LOGOUT page (index.html) - this page will redirect you to home page.

================================================================================================================
****
        In LOGIN page (login.html), you have to login using 
                                                ********************
                                                * USERNAME = admin *
                                                * PASSWORD = 12345 *
                                                ********************
        If you enter the wrong username or password you will see a message about it. 
        If you enter the right username and password it will redirect you to WELCOME page (welcome.html).

================================================================================================================
****
        On SKETCHS page (sketch_gallery.html) you can access our SKETCHS details.

        After clicking on a large SKETCH you get access to a small image with a description.

        After clicking on a small SKETCH it will open in a large window in full size.

        In order to return to the previous image use the link "BACK TO PREVIOUS IMAGE".

=================================================================================================================

****
        On ITEMS page (finished_items.html) you have access to ready made clothing models with a description.

        You can search for a model by name and it will be displayed in full size with a description. 

        Name can by case insensitive. Click on search button to searh the model

=================================================================================================================

****    On SHOPPING page (shopping.html) you have access to ready made clothing models and our SKETCHS.
        You can purchase a maximum of 4 coupons per model.

        To start, select your favorite desingn. Then select the number of coupons and click ADD to cart.

        After adding the product to the cart you will see a message with a description.

        At the top of the page you well see the total number of coupons in the cart and subtotal price.

        Use "clear Cart" button for delete all coupons and start shopping on a new one.

        Use "view cart and checkout" button for view the contents in your basket.

        Use "proceed to checkout" button to place your order and this button will redirect you to INVOICE page (invoice.html). 
        It is at the bottom of the page.

================================================================================================================

****
        On INVOICE page (invoice.html) you have access to ORDER SUMMARY. 

        To place an order, select your credit card type.

    ----- Regex for Payment from

            - Card Number:  Mastercard and Amx with 16 numbers and the Visa with 15 number. Required field.
            - CVC:  3 numbers. Required field.
            - Cardholder Name: Cardholder name must be contain FirstName and LastNname separeted by space. Only capital letters (max 31 characters). Required field.
            - Expiration date: Expiration date date must be contain 4 digital number between them "/" Example: MM/YY. Required field.
            - Agree terms and Conditions: Necessarily check this radio button. Required field.
            - Full name: First letter capital with space between First name and Last name (min 3 - max 31 characters for full name). Required field.
            - Address: can be letter or numbers. Required field.
            - City: must be contain First Capital letter, after you can use spases and enter the second word if it necessary. Required field.
            - Postal Code: must be contain only capital letters and numbers. Example: H4W2Y2 Required field.
            - Province: must be contain First Capital letter, after you can use spases and enter the second word if it necessary. Required field.

        Click on the button "CONTINUE" To complete your shopping. If any of the required were not filled you well see messages.

================================================================================================================











