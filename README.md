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
4. Routing
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
