<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        // Basic validation (add more robust validation as needed)
        if (empty($data['personalInfo']['fullName']) || empty($data['personalInfo']['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Full name and email are required.']);
            exit;
        }

        // Here you would typically save the data to a database
        // For this example, we'll just log the data
        error_log("Assessment Data: " . print_r($data, true));

        // Respond with success
        echo json_encode(['message' => 'Assessment submitted successfully!']);
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON data.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
}
?>
