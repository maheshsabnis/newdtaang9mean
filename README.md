Agular Application Development

1. Forms
   1. Template Forms
      1. @angular/forms
         1. <form></form> maps with ngForm internally
   2. Reactive Forms aka Data-Driven Forms aka Model-Driven Forms
      1. @angular/forms
         1. ReactiveFormsModule 
            1. FormGroup, create a Group of FormControls (aka editable elemnts )
               1. FormGroup is bound to [formGroup] property of <form> tag
               2. FormGroup, defines collection of Model class public properties 
                  1. FormControlsCollection
                  2. The 'value' property of FormGroup will pass the Form Model to the code
               3. Each editable element in <form></form> is known as 'FormControl'
                  1. FormControl is bound to editable element using
                     1. formControlName attribute
               4. The (ngSubmit) event is used to post the FormGroup data 
            2. Use the 'name' attribute for each editable element (input, select)
   3. Data Validations
      1. Validators class
         1. Standard Validations
            1. required() and requiredTrue()
               1. If the validator methods accepts 'AbstractControl' as input parameter then do not pass any value because it will be read implicitely using formControlName
            2. min() and max()
            3. minLength() and maxLength()
            4. pattern() the regular expression
            5. compose([Array of Validation Rules]) and composeAsync([Array of Validation Rules])
      2. Custom Validations
2. Services
   1. Classes used to contains heavy-load logic, utility logic
   2. Class is decorated with @Injectable decorator, so that it can be registered in DI Container of @NgModule
   3. Angular Services generally used for
      1. HTTP Calls
         1. @angular/common/http
            1. HttpClinetModule
               1. Provides Platform for HTTP Communication using following classes
                  1. HttpClient
                     1. get<T>()/post<T>()/put<T>()/delete<T>()
                        1. T is output parameter i.e. response from Http Service (REST)
                     2. All above methods returns Observable<T>
                        1. rxjs 
                  2. HttpHeaders
                     1. define the MediaFormatter for Post and Put request
                        1. e.g. Content-Type:application/json
                  3. HttpResponse
                  4. HttpContext
      2. Disconnected Communication across Components
3. Component Communication
   1. Components Know to each other with physical parent-child relationship
      1. The Parent Component can render the child component using child componen's selector in HTML template of parent component
      2. The parent can pass data to child provided the child component must have the public get/set property decorated with @Input() decorator.
      3. The @Input() decorated property can now be used for Property-Binding 
         1. Child component can also emit data to parent using an 'EventEmitter<T>' class
         2. Here T is the data type that will be emitted to parent
         3. EventEmitter<T> has 'emit()' method to emit data to parent when an event occured in child
         4. To Emit to parent, the EventEmitter type declaration must be decorated with @Output()
         5. The Parent Component must subscribe to the EventEmiiter of Child using Event-Binding and the emitted data will be received from child using $event 
   2. Disconnected communication across components using services
      1. Sender and receiver component must know the service using DI
      2. Service is responsible to maintain data from sender component
         1. Service define a public method that will be accessed by sender component to pass the data
         2. Service must define an EventEmitter<T> that will be subscribe by the receiver component to receive data when sender send it.   
4. Routing
   1. @angular/router
      1. RouterModule
         1. forRoot(routeTable)
            1. Loading the Table at Application Level with all components
         2. forChild(routeTable)
            1. Load the route table for 'Lazy-Loaded' Modules
      2. Routes
         1. Used to define Route Table
            1. Route
               1. path: uri
               2. component: Component Name
               3. children: Child Route Table
               4. redirectTo: Default routing if path not found
               5. loadChildren: Lazy Loading
               6. CanActivate: Router Guards
      3. Router
         1. Used for Routing Navigation based on events
            1. navigate(['<PATH>', route parameters...]);
      4. ActivatedRoute
         1. Parameter Based Routing
            1. Subscribing to parameter in route expression 
      5. [routerLink] the attribute directive that accepts the routing path
      6. <router-outlet></router-outlet>, the component that will render the HTML template of the component to be loading for a routing path
5. Directives
   1. Three (3) typef of Directives
   2. Component Directive
      1. Every component is directive
   3. Structural Directive
      1. Used to add/remove DOM elements based on condition
      2. *ngFor, executes a loop over a collection to generate DOM elements
      3. *ngIf, execute an if condition to add/remove DOM element
      4. *ngSwitch--*ngSwitchCase
   4. Attribute Directives
      1. Used to change behavior of DOM elements based on attribute
         1. ngModel
      2. Custom Attribnute Directives can be used as attribute for HTML elements for property binding to set behavior of HTML Element
         1. Public properties decorated with @Input to accept data
         2. Methods for Logic of Directive
         3. Methods those will Host events to activate the directive and thses methods will be decorated with @HostListener()
            1. @HostListener('<DOM Event>') function myFx(){...}
         4. The ElementRef the class used to refer DOM Element for applying Directive
         5. The Renderer / Renderer2  class to define rendering of ElementRef when directive is activated
