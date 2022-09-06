Tamagotchi User Stories:

-as a player i want to see instructions at start of game
-as a player i wanna have buttons that interact with the tamagotchi
-as a player i want to see information that displays my pets boredom, hunger, age,  and sleep levels
-as player i wanna be able to play with my pet when it is bored
-as a player i wanna be able to feed my pet when it’s hungry
-as a player i wanna be able to let my pet sleep when it is tired
-as a player i wanna see my pet die if it is neglected (hunger, boredom, or sleepiness >= 20)
-as a player i want to see the day change after x amount of time
-as a player i want to see my pet get older as the days pass
-as a player i want to see my pet evolve after 4 days to intermediate stage & after 5 more days to advanced stage

Tamagotchi Psudocode:

<!-- -add html elements to display pet's state (hunger, sleepy, and boredom levels)
-add html elements for buttons
-add html elements for pet -->
<!-- -create app's state variables for pet's state -->
<!-- -cache elements for pet's state & buttons -->
<!-- -add event listeners for buttons -->
<!-- -create game initialization that sets pet's state -->
<!-- -render pet's state by dynamically creating html elements to display so -->
-add asynchronous function that adds 1 to pet's state every x amount of time
-create function to delete one from corresponding pets state when button is clicked
-if any pet's state's reach 20 prompt that your pet dies
-create "would you like to play" prompt with instructions
-render a pet
-icebox: add pet age and intermediate evolution if you reach age 4 and advanced evolution if you reach age 9