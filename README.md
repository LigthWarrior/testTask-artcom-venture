Make a new Angular application consisting of 1 component and 1 service.
The service should be used to to receive data from the DATA.json file. (included in this repo)
In component you need request data using the service and display on page 2 blocks with the same size, half of the screen each.
In the first block need create a table with all elements received from service should be displayed. The table displays the value of the "Name" field for each object.
In the second block need create a table which will displayed all the data about the properties of the selected element in the first block, in the form: property name and property value (if the property value === null display the text "it's unknown").
Information in the second block is displayed only after selecting an item in the first block.
The information in the blocks should be displayed using the angular structural directives.
Block number two can be closed using the "Close" button, which should be located in the lower right corner of the second block.
You can use the UI components library to improve the visual display of the task result
