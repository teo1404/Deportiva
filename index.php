<?php
include('./php/bd.php'); 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    
    $sql = "SELECT Password FROM Clientes WHERE Username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
       
        $row = $result->fetch_assoc();
        $hashed_password = $row['Password'];

        
        if (password_verify($password, $hashed_password)) {
           
            session_start();
            $_SESSION['username'] = $username; 
            header("Location: deportes.html"); 
            exit();
        } else {
           
            $error = "Contraseña incorrecta.";
        }
    } else {
        
        $error = "Usuario no encontrado.";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../static/stylos.css">
    <title>Inicio de Sesión</title>
</head>
<body>

<div class="form-container">
    <h2>Inicio de Sesión</h2>
    <form method="POST" action="">
        <label for="username">Username:</label>
        <input type="text" name="username" required>

        <label for="password">Password:</label>
        <input type="password" name="password" required>

        <input type="submit" value="Iniciar Sesión">

      <a href="register.php" class="btn">no tienes cuenta?</a>
    </form>
    <?php if (isset($error)): ?>
        <div class="error"><?php echo $error; ?></div>
    <?php endif; ?>
</div>

</body>
</html>
