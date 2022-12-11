@extends('admin.main.index')

@section('content')

    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6 d-flex">
                    <h1 class="m-0">{{$product->title}} </h1>
                    <a href="{{route('products.edit', $product->id)}}"><i class="fas fa-pencil-alt ml-3 mr-2 mt-2 text-success" style="font-size: 16px;"></i></a>
                    <form action="{{route('products.destroy', $product->id)}}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="border-0 bg-transparent mt-1">
                            <i class="fas fa-trash text-danger" role="button"></i>
                        </button>
                    </form>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{route('admin.index')}}">Главная</a></li>
                        <li class="breadcrumb-item"><a href="{{route('products.index')}}">Категории</a></li>
                        <li class="breadcrumb-item active">Просмотр категории</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-10">
                    <div class="card">

                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap">
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <td>{{$product->id}}</td>
                                    </tr>
                                    <tr>
                                        <th>Название</th>
                                        <td>{{$product->title}}</td>
                                    </tr>
                                    <tr>
                                        <th>Описание</th>
                                        <td style="white-space: pre-wrap">{{$product->desc}}</td>
                                    </tr>
                                    <tr>
                                        <th>Вес</th>
                                        <td>{{$product->size}}</td>
                                    </tr>
                                    <tr>
                                        <th>Цена</th>
                                        <td>{{$product->price}}</td>
                                    </tr>
                                    <tr>
                                        <th>Скидка</th>
                                        <td>{{$product->discount}}</td>
                                    </tr>
                                    <tr>
                                        <th>Категория</th>
                                        <td>{{$product->category['title']}}</td>
                                    </tr>
                                    <tr>
                                        <th>Тэги</th>
                                        <td>
                                            @foreach($product->tags as $tag)
                                                {{$tag['title']}},
                                            @endforeach
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Превью</th>
                                        <td> <img src="{{Storage::url($product->product_image_1)}}" width="200"> </td>
                                    </tr>
                                    <tr>
                                        <th>Доп. изображение</th>
                                        <td> <img src="{{Storage::url($product->product_image_2)}}" width="200"> </td>
                                    </tr>
                                    <tr>
                                        <th>Доп. изображение</th>
                                        <td> <img src="{{Storage::url($product->product_image_3)}}" width="200"> </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>


            <!-- ./col -->
        </div>
        <!-- /.row -->

    </section>

@endsection
