<!DOCTYPE html>
<html>
<body>

<h2>Doctor Dashboard</h2>

<form action="add_task.php" method="POST">
  <input type="number" name="patient_id" placeholder="Patient ID" required><br>
  <input type="text" name="description" placeholder="Task" required><br>
  <input type="date" name="due_date" required><br>

  <select name="type" required>
    <option value="">Select Type</option>
    <option value="motor">Motor</option>
    <option value="speech">Speech</option>
    <option value="cognitive">Cognitive</option>
    <option value="behavioral">Behavioral</option>
  </select><br>

  <button>Add Task</button>
</form>

<br>
<a href="doctor_view.php">View Submissions</a>

</body>
</html>
