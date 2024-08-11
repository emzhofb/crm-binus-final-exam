<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
	{
		Schema::create('interactions', function (Blueprint $table) {
			$table->id();
			$table->unsignedBigInteger('contact_id');
			$table->string('type'); // email, phone, meeting, etc.
			$table->text('details');
			$table->timestamps();

			$table->foreign('contact_id')->references('id')->on('contacts')->onDelete('cascade');
		});
	}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('interactions');
    }
};
