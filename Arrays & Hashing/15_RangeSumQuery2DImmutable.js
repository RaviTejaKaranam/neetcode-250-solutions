class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(rows1, cols1, rows2, cols2) {
        if (!this.matrix || this.matrix.length === 0 || this.matrix[0].length === 0) {
            return;
         }

        const rows = this.matrix.length;
        const cols = this.matrix[0].length;

        // Edge Case: Invalid indices
        if (
            rows1 < 0 || cols1 < 0 ||
            rows2 >= rows || cols2 >= cols ||
            rows1 > rows2 || cols1 > cols2
        ) {
            return;
        }

        // Prefix sum matrix
        const matPrefixSum = [];
        for (let i = 0; i <= rows; i++) {
            matPrefixSum[i] = [];
            for (let j = 0; j <= cols; j++) {
                matPrefixSum[i][j] = 0;
            }
        }

        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                matPrefixSum[i][j] = 
                    this.matrix[i - 1][j - 1] +
                    matPrefixSum[i - 1][j] +
                    matPrefixSum[i][j - 1] -
                    matPrefixSum[i - 1][j - 1];
            }
        }

        const reqSum =
            matPrefixSum[rows2 + 1][cols2 + 1] -
            matPrefixSum[rows1][cols2 + 1] -
            matPrefixSum[rows2 + 1][cols1] +
            matPrefixSum[rows1][cols1];

        return (reqSum);
        }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
