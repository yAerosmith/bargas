<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $registros = [
            // OWNERS CAFETERÍAS
            [
                'email' => 'oscarblanco@gmail.com',
                'name' => 'Óscar Blanco',
                'saldo_disp' => null,
                'saldo_off' => null,
                'password' => Hash::make('con123'),
                'type' => 'owner',
                'gender' => 'M',
                'created_at' => now(),
                'updated_at' => now(),
            ],            [
                'email' => 'jorgepeña@gmail.com',
                'name' => 'Jorge Peña',
                'saldo_disp' => null,
                'saldo_off' => null,
                'password' => Hash::make('con123'),
                'type' => 'owner',
                'gender' => 'M',
                'created_at' => now(),
                'updated_at' => now(),
            ],            [
                'email' => 'marygarcia@gmail.com',
                'name' => 'Mary García',
                'saldo_disp' => null,
                'saldo_off' => null,
                'password' => Hash::make('con123'),
                'type' => 'owner',
                'gender' => 'F',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'mateo@gmail.com',
                'name' => 'Mateo',
                'saldo_disp' => 200,
                'saldo_off' => 175,
                'password' => Hash::make('con123'),
                'type' => 'user',
                'gender' => 'M',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            //Usuarios Creadores Dlish
            [
                'email' => 'estudiante20100325@cdb.edu.sv',
                'name' => 'Victor',
                'saldo_disp' => 200,
                'saldo_off' => 175,
                'password' => Hash::make('con123'),
                'type' => 'user',
                'gender' => 'M',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'estudiante20140333@cdb.edu.sv',
                'name' => 'Marcelo',
                'saldo_disp' => 200,
                'saldo_off' => 175,
                'password' => Hash::make('con123'),
                'type' => 'user',
                'gender' => 'F',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'estudiante20210128@cdb.edu.sv',
                'name' => 'Oscar',
                'saldo_disp' => 500,
                'saldo_off' => 175,
                'password' => Hash::make('con123'),
                'type' => 'user',
                'gender' => 'F',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'estudiante20210082@cdb.edu.sv',
                'name' => 'Eleazar',
                'saldo_disp' => 500,
                'saldo_off' => 175,
                'password' => Hash::make('con123'),
                'type' => 'user',
                'gender' => 'F',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'estudiante20210113@cdb.edu.sv',
                'name' => 'Mateo',
                'saldo_disp' => 500,
                'saldo_off' => 175,
                'password' => Hash::make('con123'),
                'type' => 'user',
                'gender' => 'F',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        User::insert($registros);
    }
}
