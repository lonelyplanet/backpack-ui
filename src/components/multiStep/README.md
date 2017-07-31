# Multi-Step

The Multi-Step component takes multiple views and displays them one at a
time with controls to allow the user to navigation between steps. An
example scenario is the sign up process for onboarding new users. The
goal of this component is to be generic enough that it can be used in
different scenarios.

There are two parts to the component; the wrapper component
`MultiStepWrapper` which provides the actions and state, and the
stateless component `MultiStep` which provides the UI. `MultiStepWrapper`
takes a function as children so that it can pass the state and
actions onto `MultiStep`. Then, `MultiStep` takes an array of children
which are the steps to be displayed and from here, the UI can be built
however it’s required.

### Example usage

```jsx
<MultiStepWrapper totalSteps={4}>
  {(currentStep, goToNextStep, goToPreviousStep) => (
    <MultiStep currentStep={currentStep}>
      <div>
        <h1>Step {currentStep}</h1>
        <Button size="tiny" onClick={goToNextStep}>Next step</Button>
      </div>

      <div>
        <h1>Step {currentStep}</h1>
        <Button size="tiny" onClick={goToPreviousStep}>Previous step</Button>
        <Button size="tiny" onClick={goToNextStep}>Next step</Button>
      </div>

      <div>
        <h1>Step {currentStep}</h1>
        <Button size="tiny" onClick={goToPreviousStep}>Previous step</Button>
        <Button size="tiny" onClick={goToNextStep}>Next step</Button>
      </div>

      <div>
        <h1>Step {currentStep}</h1>
        <Button size="tiny" onClick={goToPreviousStep}>Previous step</Button>
      </div>
    </MultiStep>
  )}
</MultiStepWrapper>
```
