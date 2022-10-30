import { mapStateToProps } from '../QuestionDetail';
describe(`The Question Detail`, () => {
  describe(`The Container Element`, () => {
    describe(`mapStateToProps`, () => {
      it("should map the state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Sapce is bug"
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);
        console.log(componentState);
        expect(componentState).toEqual(sampleQuestion)
      })
    })
  })
  it(`Should not regress`, () => {

  });
});