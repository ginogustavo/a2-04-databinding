# Components and Databinding
---
By default all properties are only accessible inside its components. If you want a parent component to access attribute you need to specify it but adding a "Decorator": @Input()
So any component hosting this one, is able to bind the input variable.

# Binding to Custome Events
---
An event in the child needs to inform the parent component.
```html
  (serverCreated) = "onServerAdded($event)"
    ^                   ^             ^
  (the event)  the method to call  (the data)
```
Make sure properties(e.g. serverCreated) are events we can emit, instead of @input.
```Typescript
= new EventEmitter;
```

**Todo: and those types in cocktail.component.html
repasar que es [(ngModel)]**


# Style Encapsulation
---
Angular enforces stylesheet Encapsulation: Assign attributes to the elements which will have the css style, each component has its own style file - a behaviour that is not normal in HTML/ CSS, but enforced in angular.

It gives the same attribute to all elements in a component
e.g. _ng-content-ejo-1. All components do the same with a diff attribute name. - > this enables styles of this component only applies to elements in this component. Emulates the shadow DOM


##### Override Encapsulation
Mark the component to not use the default Style Encapsulation(.Emulated):
```Typescript
@Component({
  encapsulation: ViewEncapsulation.None,
})
```

- The attributes are not added
- Thus, the component does not use ViewEncapsulation.
- If you define any style in the css file for this component
- they will apply globally.
- ViewEncapsulation.ShadowDom  - same result as .Emulated but only in browsers it support it.


##### Using Local Reference in templates
We are using 2 way Databinding to get server name and content.

Getting access to the template @ViewChild
access before call a method.
```html
<input type="text" class="form-control" #serverContentInput />
```
```Javascript
@ViewChild("serverContentInput", { static: true }) serverContentInput;
```
not only strings, but also components.

# ng-content - Projecting Content into components
By default what's inside your component tag is ignored. But with the <ng-content> directive you can change this.

# ngOnInit
It's a life cycle hook.
