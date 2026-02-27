function calculateSalary() {
            const grossInput = document.getElementById('grossSalary').value;

            if (grossInput === "" || isNaN(grossInput)) {
                alert("Please enter a valid salary amount.");
                return;
            }

            const gross = parseFloat(grossInput);
            
            // Formula: Net = Gross - (Gross * 0.10)

            const tax = gross * 0.10;
            const net = gross - tax;

            // Display with formatting
            
            document.getElementById('netSalaryResult').innerHTML = 
                `Php${net.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }