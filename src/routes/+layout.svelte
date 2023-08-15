<script>
  let displayValue = "0";
  let currentInput = "";
  let operator = null;
  let previousValue = null;

  function handleNumberClick(number) {
    if (displayValue === "0") {
      displayValue = number.toString();
    } else {
      displayValue += number.toString();
    }
  }

  function handleOperatorClick(op) {
    currentInput = displayValue;
    operator = op;
    previousValue = parseFloat(currentInput);
    displayValue = "0";
  }

  function calculate() {
    const currentValue = parseFloat(displayValue);

    switch (operator) {
      case "+":
        displayValue = (previousValue + currentValue).toString();
        break;
      case "-":
        displayValue = (previousValue - currentValue).toString();
        break;
      case "*":
        displayValue = (previousValue * currentValue).toString();
        break;
      case "/":
        displayValue = (previousValue / currentValue).toString();
        break;
    }

    currentInput = "";
    operator = null;
    previousValue = null;
  }

  function reset() {
    displayValue = "0";
    currentInput = "";
    operator = null;
    previousValue = null;
  }
</script>

<main class="calculator">
  <h1>Jessie's Calculator</h1>
  <div class="display">{displayValue}</div>
  <div class="buttons">
    <div class="button-row">
      {#each [7, 8, 9] as number}
        <button on:click={() => handleNumberClick(number)}>{number}</button>
      {/each}
      <button on:click={calculate}>=</button>
    </div>
    <div class="button-row">
      {#each [4, 5, 6] as number}
        <button on:click={() => handleNumberClick(number)}>{number}</button>
      {/each}
      <button on:click={() => handleOperatorClick("+")}>+</button>
    </div>
    <div class="button-row">
      {#each [1, 2, 3] as number}
        <button on:click={() => handleNumberClick(number)}>{number}</button>
      {/each}
      <button on:click={() => handleOperatorClick("-")}>-</button>
    </div>
    <div class="button-row">
      <button on:click={() => handleNumberClick(0)}>0</button>
      <button on:click={() => handleOperatorClick("*")}>*</button>
      <button on:click={() => handleOperatorClick("/")}>/</button>
      <button on:click={reset} class="reset-button">Reset</button>
    </div>
  </div>
</main>
<slot> </slot>

<style>
  .calculator {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }

  .display {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-row {
    display: flex;
    justify-content: center;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #f0f0f0;
  }

  .reset-button {
    background-color: #ff3e00;
    color: white;
    font-weight: bold;
    padding: 15px 30px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .reset-button:hover {
    background-color: #e62800;
  }
</style>
