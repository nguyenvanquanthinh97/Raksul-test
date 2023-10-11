import { isPalindrome, rotateMatrixCounterClockwise } from "../raksul";

it("return true if the input is a Palindrome string", () => {
  const input = "ABCBA";
  const result = isPalindrome(input);
  expect(result).toBeTruthy();
});

it("return false if the input is not a Palindrome string", () => {
  const input = "ABCBACDEF";
  const result = isPalindrome(input);
  expect(result).toBeFalsy;
});

it("should return a rotated matrix with counter-clockwise position", () => {
  const input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  const expectedResult = [
    [4, 8, 12, 16],
    [3, 7, 11, 15],
    [2, 6, 10, 14],
    [1, 5, 9, 13],
  ];

  const result = rotateMatrixCounterClockwise(input);

  expect(result).toEqual(expectedResult);
});
