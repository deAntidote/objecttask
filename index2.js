class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
    mean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
      return sortedData.length % 2 === 0
        ? (sortedData[middle - 1] + sortedData[middle]) / 2
        : sortedData[middle];
    }
  
    mode() {
      const frequencyMap = {};
      this.data.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
  
      let mode;
      let maxFrequency = 0;
  
      for (const value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
          mode = Number(value);
          maxFrequency = frequencyMap[value];
        }
      }
  
      return mode;
    }
  
    // Measures of Dispersion
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const meanValue = this.mean();
      const squaredDifferences = this.data.map((value) => Math.pow(value - meanValue, 2));
      return squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    // Additional measures of dispersion
    quartile(range) {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const index = Math.floor((range / 4) * (sortedData.length - 1));
      return sortedData[index];
    }
  
    interquartileRange() {
      return this.quartile(3) - this.quartile(1);
    }
  }
  
  // Example usage:
  const data = [5, 8, 10, 15, 5, 12, 8, 3, 10];
  const stats = new DescriptiveStatistics(data);
  
  console.log("Mean:", stats.mean());
  console.log("Median:", stats.median());
  console.log("Mode:", stats.mode());
  console.log("Range:", stats.range());
  console.log("Variance:", stats.variance());
  console.log("Standard Deviation:", stats.standardDeviation());
  console.log("Interquartile Range:", stats.interquartileRange());