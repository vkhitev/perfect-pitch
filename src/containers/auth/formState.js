export default {
  state: {
    error: null,
    email: '',
    password: '',
    pristine: true,
  },
  handlers: {
    updateField: () => event => ({
      error: null,
      [event.target.name]: event.target.value,
    }),
    setError: () => error => ({error}),
    pollute: () => () => ({pristine: false}),
  },
};
