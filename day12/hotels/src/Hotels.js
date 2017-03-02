// hotels.js
/*
Create three objects of type Hotel. Each of them share some properties and methods. The user should be able to insert number of nights for each hotel and get back results, whether the hotel is available or not (for some number of nights). For each hotel generate random integers from 1-10 that stores available nights. If the the Hotel is available, provide a button labeled "I'll reserve" otherwise provide a message with text "Sorry, no free room for <number_of_nights> nights".

Try to style the Program with the colors #003580, #FFFFFF and #E9F0FA so it can be embedded within real production website.
*/



function Hotel(name, picture) {
    this.name = name;
    this.picture = "img/" + picture;
    this.nights = Math.ceil(Math.random() * 10);

    this.bookNights = function(night_count) {
        if (night_count > 0 && night_count <= this.nights) {
            var button = document.createElement("BUTTON");
            button.textContent = "I'll resevere";
            button.addEventListener('click', function() {
                doBooking(this, night_count);
            });
            // button.onclick = function() { doBooking(this, night_count);};
            return button;
        } else {
            var sorry = document.createElement("P");
            sorry.innerHTML = "Sorry, no free room for " + night_count + " nights.";
            return sorry;
        }
    }

    this.doBooking = function(night_count) {
        if (night_count > 0 && night_count <= this.nights) {
            this.nights -= night_count;
            return true;
        } else {
            return false;
        }


    }

    this.getContent = function(column, night_count) {
        switch (column) {
            case 0:
                var pic = document.createElement('div');
                pic.className = "hotel--image";
                console.log(this.picture);
                pic.style.backgroundImage = "url(" + this.picture + ")";
                return pic;
                break;
            case 1:
                var description = document.createElement('div');
                description.className = "hotel--description";
                var title = document.createElement('h2');
                title.textContent = this.name;
                description.appendChild(title);
                description.appendChild(this.bookNights(night_count));
                return description;
                break;
            case 2:
                var nights = document.createElement('div');
                nights.className = "hotel--nights";
                var title = document.createElement('h2');
                title.textContent = "Nights available: "
                nights.appendChild(title);
                var night_number = document.createElement('div');
                night_number.textContent = this.nights;
                nights.appendChild(night_number);
                return nights;
                break;
                // case 3:
                //     return this.bookNights(night_count).outerHTML;
                //     break;
            default:
                return '';

        }
    }
}



var hotel_data = [
    ["Bermondsey Square Hotel", "Bermondsey_Square_Hotel.jpg"],
    ["Madonna di Campiglio Hotel", "Madonna_di_Campiglio_Hotel.jpg"],
    ["Queens Suite Hotel", "Queens_Suite_Hotel.jpg"],
    ["Ruby Hotel", "Ruby_Hotel.jpg"],
    ["The Berkeley Hotel", "The_Berkeley_Hotel.jpg"],
    ["The County Hotel", "The_County_Hotel.jpg"],
    ["The Gibson Hotel", "The_Gibson_Hotel.jpg"],
    ["The Sunny Bank Hotel", "The_Sunny_Bank_Hotel.jpg"]
]
var hotels = hotel_data.map(function(data) {
        return new Hotel(data[0], data[1]);
    })
    /*
    var hotels = [];

    hotels.push(new Hotel("Golden Nugget Hotel"));
    hotels.push(new Hotel("Ancient Oyster Hotel"));
    hotels.push(new Hotel("Autumn Spring Resort"));
    hotels.push(new Hotel("Sunny Orb Hotel"));
    hotels.push(new Hotel("Serene Gulf Hotel"));
    hotels.push(new Hotel("Silver Willow Resort"));
    hotels.push(new Hotel("Road Trip Hotel"));
    hotels.push(new Hotel("Elysium Hotel"));
    hotels.push(new Hotel("Oceanview Resort"));
    hotels.push(new Hotel("Seacoast Resort"));
    */
function listHotel(hotel_id, cell_id) {
    return hotels[hotel_id].getContent(cell_id, night_count);
}

function doBooking(hotel, nights) {

    console.log(hotel.name + " was booked for " + nights + ' nights.');
}
var search_days = document.getElementById("search--days");
var search_button = document.getElementById("search--button");


var table_container = document.getElementById("hotels");

search_button.addEventListener('click', function() {
    while (table_container.firstChild) {
        table_container.removeChild(table_container.firstChild);
    }
    var table_content = matrix(function(content1) {
        return wrapTag('div', content1, 'hotel');
    }, function(content) {
        return wrapTag('div', content, 'hotel--content');
    }, hotels.length, 3, function(row, column) {
        return hotels[row].getContent(column, Number(search_days.value));
    }, table_container);
    // table_container.appendChild(table_content);
})
