// jest.svgTransform.ts
module.exports = {
  process() {
    return {
      code: `module.exports = (props) => require('react').createElement('svg', props);`,
    };
  },
};
