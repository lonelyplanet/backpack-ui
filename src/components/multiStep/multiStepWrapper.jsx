import React from "react";

export default class MultiStepWrapper extends React.Component {
  static propTypes = {
    children: React.PropTypes.func.isRequired,
    totalSteps: React.PropTypes.number.isRequired,
  }

  state = {
    currentStep: 1,
  };

  setCurrentStep(step) {
    this.setState({
      currentStep: (step <= this.props.totalSteps) ? step : this.state.currentStep,
    });
  }

  goToNextStep() {
    if (this.state.currentStep < this.props.totalSteps) {
      this.setCurrentStep(this.state.currentStep + 1);
    }
  }

  goToPreviousStep() {
    if (this.state.currentStep !== 1) {
      this.setCurrentStep(this.state.currentStep - 1);
    }
  }

  render() {
    return this.props.children(
      this.state.currentStep,
      this.goToNextStep.bind(this),
      this.goToPreviousStep.bind(this),
      this.setCurrentStep.bind(this),
    );
  }
}
