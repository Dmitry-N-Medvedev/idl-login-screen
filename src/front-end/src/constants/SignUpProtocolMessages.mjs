export const SignUpProtocolMessageTypes = Object.freeze({
  FieldValueChanged: 'FieldValueChanged',
  AllFieldsPopulated: 'AllFieldsPopulated',
  SubmitSignUpInfo: 'SubmitSignUpInfo',
});

export const SignUpProtocolMessages = Object.freeze({
  FieldValueChanged: ({ key, payload }) => Object.freeze({
    type: SignUpProtocolMessageTypes.FieldValueChanged,
    key,
    payload,
  }),
  AllFieldsPopulated: () => Object.freeze({
    type: SignUpProtocolMessageTypes.AllFieldsPopulated,
  }),
  SubmitSignUpInfo: () => Object.freeze({
    type: SignUpProtocolMessageTypes.SubmitSignUpInfo,
  }),
});