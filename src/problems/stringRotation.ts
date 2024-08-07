export const stringRotationProblem = {
  id: 9,
  title: 'String Rotation',
  description:
    'Assume you have a method `isSubstring` which checks if one word is a substring of another. Given two strings, `s1` and `s2`, write code to check if `s2` is a rotation of `s1` using only one call to `isSubstring` (e.g., "waterbottle" is a rotation of "erbottlewat").',
  solution: `
export const isSubstring = (str: string, sub: string): boolean => {
  return str.includes(sub);
};

export const stringRotation = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) {
    return false;
  }
  const combined = s1 + s1;
  return isSubstring(combined, s2);
};`,
}

export const isSubstring = (str: string, sub: string): boolean => {
  return str.includes(sub)
}

export const stringRotation = (s1: string, s2: string): boolean => {
  if (s1.length !== s2.length) {
    return false
  }
  const combined = s1 + s1
  return isSubstring(combined, s2)
}
