# Challenge: To do list 

You must make a to do list.

## What should this do?

Controlling a global state adding and checking a task or removinving from the list

## How should be it?

This must have three cruscial functionality, add a new task, check a task as completed and remove and task from the list.

## Requisites

All the identification must be put in attribute `data-test-id`.

* **What should have?**

  * Have must a title, identified by `title`, in top having text "To do list";

  * Have must an `input` to type a new task, this input will be identify as `task`;

  * Have must a `button` to add this task to list, this button will be identify as `add-task` and have a text "Add";

  * Have must a list (feel free to choose the element), sheltering all the task, this list must be identify as `list`;

  * Each element inside `list` element, will represent a task and your information, each element must be identify as `item-N`, the `N` must be index, inside the `item` have must...

    * A `input checkbox` element to conclude the task;
    
    * An element (of your choice) identified by `task-name` showing the name task;
    
    * A `button` element, identified by `remove-task`, to remove the task from to list.

  * Your system must be a container identifyied by `info` that must show 2 informations:

    * 1st: an element identified by `total-remaining-tasks` notifying how many task are left to complete the to do list, just numbers;

    * 2nd: an element identified by `total-completed-tasks` notifying how many task are completed, just numbers.

* **Rules**

  * After adds a new task, the `input` must be empty and focused to type new task;

  * Both the `button` (`add-task`) and the type the `Enter` key in input must be adds the task;

  * The element `item-N`, (taks item), must have a special attribute called `data-test-status`, that should be filled by following rules:

    * If not completed and not removed must be filled with `in-progress`;

    * If the task are completed, must be filled with `completed`;

    * If the task are removed, must be filled with `removed`.

  * When the task are completed or removed, the checkbox must be disable, the button (`remove-task`) must be desapear but the task name must be stay in the same position (`task-name`);

  * Your system must be prevent de duplicate task, if inserts a duplicate tasks, just , you can use `trim` to certify this rule;

  * When removes a task, it shouldn't not count as completed;

  * Check the template in directory `template/`.

## How to starts

Run `yarn` to install the packages.

Do your code of your way, you can view your changes running `yarn start`.

The page will reload if you make edits. You will also see any lint errors in the console.

## How to test it

Just run `yarn cypress:open`, and the cypress window, click in `todo-list.spec` or run `yarn cypress:open` to run without interface.

## Important notes

Try split your code in components.

Not is required a test for component.

Feel free to make your designe.

You must use a control global state, Redux or Context API.

Good luck ;)
