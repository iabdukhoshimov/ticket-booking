package main

import (
	"fmt"
	"strings"
)

func main() {
	var conferenceName = "Go conferenece"
	const conferenceTickets = 50
	var remainingTickets uint = 50
	bookings := []string{}

	fmt.Printf("Welcome to %v booking application\n", conferenceName)
	fmt.Printf("We have total %v tickets and available %v \n", conferenceTickets, remainingTickets)
	fmt.Println("Get your tickets here to attend")

	for {
		var firstName string
		var lastName string
		var email string
		var userTickets uint

		fmt.Println("Please enter your name:")
		fmt.Scan(&firstName)

		fmt.Println("Please enter your last name:")
		fmt.Scan(&lastName)

		fmt.Println("Please enter your email:")
		fmt.Scan(&email)

		fmt.Println("Please enter how many tickets you want to book?")
		fmt.Scan(&userTickets)

		// isValidName := len(firstName) >= 2 && len(lastName) >= 2

		if userTickets <= remainingTickets {

			remainingTickets = remainingTickets - userTickets
			bookings = append(bookings, firstName+" "+lastName)

			// fmt.Printf("The whole array %v\n", bookings)
			// fmt.Printf("The first element array %v\n", bookings[0])
			// fmt.Printf("The type of the array %T\n", bookings)
			// fmt.Printf("The size of the array %v\n", len(bookings))

			fmt.Printf("Thank you %v %v for booking %v tickets. You will be recieve a confirmation email at %v\n", firstName, lastName, userTickets, email)

			fmt.Printf("%v this many tickets available for this %v \n", remainingTickets, conferenceName)

			firstNames := []string{}

			for _, booking := range bookings {
				var names = strings.Fields(booking)

				firstNames = append(firstNames, names[0])
			}

			fmt.Printf("The first names of bookings are %v\n", firstNames)
			if remainingTickets == 0 {
				fmt.Println("Our conference is booked out. Come back next year")
				break
			}
		} else {
			fmt.Printf("We have only %v tickets remaining , you can't book %v tickets\n", remainingTickets, userTickets)
			continue
		}

	}

}
