-- Mock data for User table
INSERT INTO
    "User" (
        "id", "name", "contact", "email", "birthdate", "password", "blood_group", "address", "created_at", "updated_at"
    )
VALUES (
        '1', 'John Doe', '+1234567890', 'john@example.com', '1990-05-15', 'password123', 'O+', '123 Main Street', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Jane Smith', '+1987654321', 'jane@example.com', '1985-08-20', 'password456', 'A-', '456 Elm Street', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for AuthorityToken table
INSERT INTO
    "AuthorityToken" (
        "id", "refreshToken", "family", "browserInfo", "expiresAt", "authorityId", "createdAt"
    )
VALUES (
        '1', 'refresh_token_1', 'Family1', 'Browser Info 1', '2024-06-01 00:00:00', '1', CURRENT_TIMESTAMP
    ),
    (
        '2', 'refresh_token_2', 'Family2', 'Browser Info 2', '2024-06-15 00:00:00', '2', CURRENT_TIMESTAMP
    );

-- Mock data for Citizen table
INSERT INTO
    "Citizen" (
        "id", "status", "occupation", "userId", "otp_code", "created_at", "updated_at"
    )
VALUES (
        '1', 'ACTIVE', 'Engineer', '1', '1234', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'ACTIVE', 'Doctor', '2', '5678', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Source table
INSERT INTO
    "Source" (
        "id", "name", "citizenId", "created_at", "updated_at"
    )
VALUES (
        '1', 'Anonymous', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Anonymous', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for EmergencyContact table
INSERT INTO
    "EmergencyContact" (
        "id", "name", "contact", "citizenId", "created_at", "updated_at"
    )
VALUES (
        '1', 'Emergency Contact 1', '+1122334455', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Emergency Contact 2', '+9988776655', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Service table
INSERT INTO
    "Service" (
        "id", "name", "created_at", "updated_at"
    )
VALUES (
        '1', 'Police', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Fire Department', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Region table
INSERT INTO
    "Region" (
        "id", "name", "description", "created_at", "updated_at"
    )
VALUES (
        '1', 'Region 1', 'Description of Region 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Region 2', 'Description of Region 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Bureau table
INSERT INTO
    "Bureau" (
        "id", "name", "code", "latitude", "longitude", "serviceId", "regionId", "created_at", "updated_at"
    )
VALUES (
        '1', 'Bureau 1', 'B001', 40.7128, -74.0060, '1', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Bureau 2', 'B002', 34.0522, -118.2437, '2', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Authority table
INSERT INTO
    "Authority" (
        "id", "matricule", "password", "userId", "bureauId", "roleId", "created_at", "updated_at"
    )
VALUES (
        '1', 'M001', 'auth_password_1', '1', '1', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'M002', 'auth_password_2', '2', '2', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Role table
INSERT INTO
    "Role" ("id", "name")
VALUES (1, 'Admin'),
    (2, 'Supervisor');

-- Mock data for Permission table
INSERT INTO
    "Permission" ("id", "name")
VALUES (1, 'Read'),
    (2, 'Write');

-- Mock data for Category table
INSERT INTO
    "Category" (
        "id", "name", "code", "description", "created_at", "updated_at"
    )
VALUES (
        '1', 'Category 1', 'C001', 'Description of Category 1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Category 2', 'C002', 'Description of Category 2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Report table
INSERT INTO
    "Report" (
        "id", "title", "description", "date", "latitude", "longitude", "address", "type", "status", "authorityId", "sourceId", "categoryId", "created_at", "updated_at"
    )
VALUES (
        '1', 'Report 1', 'Description of Report 1', '2024-05-04 10:00:00', 40.7128, -74.0060, '123 Main Street', 'UNKNOWN', 'UPLOADED', '1', '1', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Report 2', 'Description of Report 2', '2024-05-05 11:00:00', 34.0522, -118.2437, '456 Elm Street', 'ALERT', 'SOLVED', '2', '2', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for File table
INSERT INTO
    "File" (
        "id", "name", "original_name", "path", "reportId", "created_at", "updated_at"
    )
VALUES (
        '1', 'file1.txt', 'File 1', '/path/to/file1.txt', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'file2.txt', 'File 2', '/path/to/file2.txt', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );

-- Mock data for Message table
INSERT INTO
    "Message" (
        "id", "content", "date", "reportId", "authorityId", "created_at", "updated_at"
    )
VALUES (
        '1', 'Message 1 content', '2024-05-04 12:00:00', '1', '1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    ),
    (
        '2', 'Message 2 content', '2024-05-05 13:00:00', '2', '2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );