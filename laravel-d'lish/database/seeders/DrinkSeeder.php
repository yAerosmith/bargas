<?php

namespace Database\Seeders;

use App\Models\Drink;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DrinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $registros = [
            //cafeteria 1
            [
              'name' => 'Tamarindo',
              'cafeteria_id' => 1,
              // 'img' => 'tamarindo.jpg',
              // 'price' => 0.50,
              'created_at' => Carbon::now(),
              'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Jamaica',
                'cafeteria_id' => 1,
                // 'img' => 'jamaica.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Te',
                'cafeteria_id' => 1,
                // 'img' => 'te.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],

            //Cafeteria 2
            [
                'name' => 'Tamarindo',
                'cafeteria_id' => 2,
                // 'img' => 'tamarindo.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
              ],
              [
                  'name' => 'Jamaica',
                  'cafeteria_id' => 2,
                  // 'img' => 'jamaica.jpg',
                  // 'price' => 0.50,
                  'created_at' => Carbon::now(),
                  'updated_at' => Carbon::now(),
              ],
              [
                  'name' => 'Te',
                  'cafeteria_id' => 2,
                  // 'img' => 'te.jpg',
                  // 'price' => 0.50,
                  'created_at' => Carbon::now(),
                  'updated_at' => Carbon::now(),
              ],

              //Cafeteria 3
              [
                'name' => 'Tamarindo',
                'cafeteria_id' => 3,
                // 'img' => 'tamarindo.jpg',
                // 'price' => 0.50,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
              ],
              [
                  'name' => 'Jamaica',
                  'cafeteria_id' => 3,
                  // 'img' => 'jamaica.jpg',
                  // 'price' => 0.50,
                  'created_at' => Carbon::now(),
                  'updated_at' => Carbon::now(),
              ],
              [
                  'name' => 'Te',
                  'cafeteria_id' => 3,
                  // 'img' => 'te.jpg',
                  // 'price' => 0.50,
                  'created_at' => Carbon::now(),
                  'updated_at' => Carbon::now(),
              ],
            
        ];
        Drink::insert($registros);
    }
}
